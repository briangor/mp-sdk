import { setupSdk } from '@matterport/sdk';

if (!process.env.SDK_KEY) {
  console.error('SDK_KEY is not defined in the environment');
}

const main = async () => {
    const mpSdk = await setupSdk(process.env.SDK_KEY || 'SDK_KEY');
    await mpSdk.App.state.waitUntil(state => state.phase === mpSdk.App.Phase.PLAYING)
  mpSdk.Camera.rotate(35, 0)
  }
main().catch(err => console.error('Error:', err));