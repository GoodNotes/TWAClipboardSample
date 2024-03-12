# Sample TWA app to request clipboard permission

## How to run the example

1. [How to launch the web app](pwa/README.md)
2. [How to launch the Android app](android/README.md)

![Screenshot_1710265892](https://github.com/GoodNotes/TWAClipboardSample/assets/2377749/5e92d48b-bf5f-4eaf-a404-9dfe332343f6)

## What is the problem?

Executing:

```typescript
await navigator.clipboard.read();
```

returns a promise that is never resolved or rejected.

## How to reproduce the problem?

1. Start the web.
2. Launch the Android app.
3. Tap on the button.
4. In the Chrome console, you can see the first log message but not the one after the promise and no dialogue prompts for permission in the TWA.

To reproduce it again **you must clear site settings and permissions** inside Google Chrome, kill the app and open it again.

## Which version of Chrome are we using?

It happens with all the latest versions of Chrome. For example:
![chromeVersion](https://github.com/GoodNotes/TWAClipboardSample/assets/2377749/36cd07bd-6101-4930-bcf2-24c655eb6977)

### Example of permission dialogue never appearing

https://github.com/GoodNotes/TWAClipboardSample/assets/2377749/9d92804e-8746-4b7b-9503-b434bd678343

### Example of permission being rejected briefly while reloading with Chrome dev tools

https://github.com/GoodNotes/TWAClipboardSample/assets/2377749/f720385e-49b3-4837-8950-392363eb9ef0

### Example of correct behaviour in Chrome outside the TWA

https://github.com/GoodNotes/TWAClipboardSample/assets/2377749/218290ed-b1b4-4d32-935c-6efdbd1a28ca

