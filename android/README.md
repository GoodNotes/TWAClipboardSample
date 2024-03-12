# Launching the Andorid app

1. Start the PWA first. Check [executing the PWA](../pwa/README.md).
2. Create a certificate authority. You can use:
```sh
openssl x509 -in "$(mkcert -CAROOT)/rootCA.pem" -signkey "$(mkcert -CAROOT)/rootCA-key.pem" -extfile android_options.txt -out ".cert/CA.crt"
```

where `android_options.txt` is:
```txt
basicConstraints=CA:true
```

3. Install it into the Android device as a valid CA.
4. Run the app from Android Studio.
