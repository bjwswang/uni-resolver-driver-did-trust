export interface ResolverMetadata {
  identifier: string,
  driverId: string,
  duration: number,
  retrieved: string
}

export interface ResolutionResult {
    didDocument: any;
    resolverMetadata: ResolverMetadata;
  }