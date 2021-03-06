![DIF Logo](https://raw.githubusercontent.com/decentralized-identity/universal-resolver/master/docs/logo-dif.png)

# Universal Resolver Driver for DID `trust`

This is an [Universal Resolver](https://github.com/decentralized-identity/universal-resolver/) driver for **did:trust** identifiers.

## Specifications

* [Decentralized Identifiers](https://w3c.github.io/did-core/)

## Example DIDs

```
did:trust:cert.EiDi8NEZVyvqmHeWRB5kUagWo3sDSQlCtl1nZ1vVgLdozw
did:trust:license.EiBdAy5GeNr9qcVQ-40fOwMVQW2CRGT2M238cp6yLJLnGg
```

## Build and Run (Docker)

```
docker build -f ./docker/Dockerfile . -t bjwswang/driver-did-trust:latest
docker run -p 8080:8080 bjwswang/driver-did-trust:latest
curl -X GET http://localhost:8080/1.0/identifiers/did:trust:cert.EiDi8NEZVyvqmHeWRB5kUagWo3sDSQlCtl1nZ1vVgLdozw
```

## Build and Run (NodeJS)

```
npm install 
npm run build
npm run start
```

## Driver Environment Variables

The driver recognizes the following environment variables:

```
ENV PORT=8080
ENV DRIVER_ID=driver-universalresolver/driver-did-trust
ENV RESOLVER=http://did.360.cn/resolve/v1
```

### `uniresolver_driver_did_trust_exampleSetting`


## Driver Metadata

The driver returns the following metadata in addition to a DID document:

* `resolverMetadata`: 

```
  "resolverMetadata": {
    "identifier": "did:trust:cert.EiDi8NEZVyvqmHeWRB5kUagWo3sDSQlCtl1nZ1vVgLdozw",
    "driverId": "driver-universalresolver/driver-did-trust",
    "duration": 38,
    "retrieved": "Fri, 19 Jun 2020 11:33:46 GMT"
  }
```
