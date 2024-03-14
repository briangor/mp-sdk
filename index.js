import { setupSdk } from '@matterport/sdk';

const main = async () => {
    // Initialize SDK here
    const mpSdk = await setupSdk('sdk');
    await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)
  mpSdk.Camera.rotate(35, 0)
  }
main().catch(err => console.error('Error:', err));