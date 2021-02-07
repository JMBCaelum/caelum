module.exports = {
  '@context': {
    '@version': 1.1,
    id: '@id',
    type: '@type',
    dc: 'http://purl.org/dc/terms/',
    schema: 'http://schema.org/',
    sec: 'https://w3id.org/security#',
    didns: 'https://www.w3.org/ns/did/v1#',
    xsd: 'http://www.w3.org/2001/XMLSchema#',
    EcdsaSecp256k1VerificationKey2019: 'sec:EcdsaSecp256k1VerificationKey2019',
    Ed25519Signature2018: 'sec:Ed25519Signature2018',
    Ed25519VerificationKey2018: 'sec:Ed25519VerificationKey2018',
    JsonWebKey2020: 'sec:JsonWebKey2020',
    JsonWebSignature2020: 'sec:JsonWebSignature2020',
    RsaVerificationKey2018: 'sec:RsaVerificationKey2018',
    SchnorrSecp256k1VerificationKey2019: 'sec:SchnorrSecp256k1VerificationKey2019',
    X25519KeyAgreementKey2019: 'sec:X25519KeyAgreementKey2019',
    ServiceEndpointProxyService: 'didv:ServiceEndpointProxyService',
    LinkedDomains: 'https://identity.foundation/.well-known/resources/did-configuration/#LinkedDomains',
    alsoKnownAs: {
      '@id': 'https://www.w3.org/ns/activitystreams#alsoKnownAs',
      '@type': '@id',
      '@container': '@set'
    },
    assertionMethod: {
      '@id': 'sec:assertionMethod',
      '@type': '@id',
      '@container': '@set'
    },
    authentication: {
      '@id': 'sec:authenticationMethod',
      '@type': '@id',
      '@container': '@set'
    },
    capabilityDelegation: {
      '@id': 'sec:capabilityDelegationMethod',
      '@type': '@id',
      '@container': '@set'
    },
    capabilityInvocation: {
      '@id': 'sec:capabilityInvocationMethod',
      '@type': '@id',
      '@container': '@set'
    },
    controller: {
      '@id': 'sec:controller',
      '@type': '@id'
    },
    created: {
      '@id': 'dc:created',
      '@type': 'xsd:dateTime'
    },
    blockchainAccountId: 'sec:blockchainAccountId',
    keyAgreement: {
      '@id': 'sec:keyAgreementMethod',
      '@type': '@id',
      '@container': '@set'
    },
    publicKey: {
      '@id': 'sec:publicKey',
      '@type': '@id',
      '@container': '@set'
    },
    publicKeyBase58: 'sec:publicKeyBase58',
    publicKeyJwk: {
      '@id': 'sec:publicKeyJwk',
      '@type': '@json'
    },
    service: {
      '@id': 'didns:service',
      '@type': '@id',
      '@container': '@set'
    },
    serviceEndpoint: {
      '@id': 'didns:serviceEndpoint',
      '@type': '@id'
    },
    updated: {
      '@id': 'dc:modified',
      '@type': 'xsd:dateTime'
    },
    verificationMethod: {
      '@id': 'sec:verificationMethod',
      '@type': '@id'
    }
  }
}
