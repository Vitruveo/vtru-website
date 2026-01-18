#!/usr/bin/env node

/**
 * Test script for the chat API
 * Run with: node scripts/test-chat.js
 */

const API_URL = process.env.API_URL || 'http://localhost:3000/api/chat';
const RETRY_DELAY = 60000; // 1 minute between retries
const MAX_RETRIES = 10;

async function testChat(message, retryCount = 0) {
  console.log(`\n[${new Date().toISOString()}] Sending message: "${message}"`);
  console.log(`Attempt ${retryCount + 1}/${MAX_RETRIES}`);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: crypto.randomUUID(),
        message: {
          id: crypto.randomUUID(),
          role: 'user',
          parts: [{ type: 'text', text: message }],
        },
        selectedChatModel: 'chat-model',
        messages: [],
      }),
    });

    console.log(`Response status: ${response.status}`);

    if (!response.ok) {
      const text = await response.text();
      console.error('Error response:', text);

      if (response.status === 429 && retryCount < MAX_RETRIES - 1) {
        console.log(`Rate limited. Waiting ${RETRY_DELAY / 1000}s before retry...`);
        await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        return testChat(message, retryCount + 1);
      }

      return { success: false, error: text };
    }

    // Read SSE stream
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let fullResponse = '';
    let hasContent = false;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      fullResponse += chunk;

      // Check for actual content
      if (chunk.includes('"text":') || chunk.includes('"content":')) {
        hasContent = true;
      }
    }

    console.log('\n--- Raw Response (first 2000 chars) ---');
    console.log(fullResponse.substring(0, 2000));
    console.log('--- End Response ---\n');

    if (hasContent) {
      console.log('✓ SUCCESS: Received content from the model');
      return { success: true, response: fullResponse };
    } else if (fullResponse.includes('error')) {
      console.log('✗ ERROR: Response contains error');

      // Check for rate limit in SSE response
      if (fullResponse.includes('quota') || fullResponse.includes('429') || fullResponse.includes('RESOURCE_EXHAUSTED')) {
        if (retryCount < MAX_RETRIES - 1) {
          console.log(`Rate limited. Waiting ${RETRY_DELAY / 1000}s before retry...`);
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
          return testChat(message, retryCount + 1);
        }
      }

      return { success: false, response: fullResponse };
    } else {
      console.log('? UNCLEAR: Response received but no clear content');
      return { success: 'unclear', response: fullResponse };
    }

  } catch (error) {
    console.error('Request failed:', error.message);

    if (retryCount < MAX_RETRIES - 1) {
      console.log(`Waiting ${RETRY_DELAY / 1000}s before retry...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
      return testChat(message, retryCount + 1);
    }

    return { success: false, error: error.message };
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Chat API Test Script');
  console.log('='.repeat(60));
  console.log(`API URL: ${API_URL}`);
  console.log(`Retry delay: ${RETRY_DELAY / 1000}s`);
  console.log(`Max retries: ${MAX_RETRIES}`);
  console.log('='.repeat(60));

  const testMessages = [
    'What is the current block number?',
  ];

  for (const message of testMessages) {
    const result = await testChat(message);

    if (result.success === true) {
      console.log('\n🎉 Test passed! Chat is working correctly.\n');
      process.exit(0);
    }
  }

  console.log('\n❌ All tests failed. Check the logs above for details.\n');
  process.exit(1);
}

main().catch(console.error);
