# Simple PWA to request Clipboard read permission

1. Generate a local certificate using:
```sh
$> mkcert your_domain_or_ip_address
```

2. Run the app:

```sh
$> HTTPS=true SSL_CRT_FILE=your_cert.pem SSL_KEY_FILE=your_cert-key.pem npm start
```
