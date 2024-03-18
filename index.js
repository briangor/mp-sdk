import { setupSdk } from '@matterport/sdk';

const main = async () => {
    const mpSdk = await setupSdk(process.env.SDK_KEY || 'SDK_KEY');
    await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)
  mpSdk.Camera.rotate(35, 0)
  }
main().catch(err => console.error('Error:', err));