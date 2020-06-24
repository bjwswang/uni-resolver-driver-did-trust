// src/users/usersController.ts
import {
    Controller,
    Header,
    Get,
    Path,
    Route,
    Response,
  } from "tsoa";
  import { ResolutionResult,ResolverMetadata } from './did'
  import { DidsService } from "./service";

const driverId = process.env.DRIVER_ID || 'driver-universalresolver/driver-did-trust'
const valideTrustDid = `^did:trust:([0-9a-zA-Z-_.]*)$`

@Route("/1.0/identifiers")
  export class DidsController extends Controller {
  /**
   * @example identifier "did:trust:cert.EiA70jCigP-sZBtFSs3EUhFfJTB2UwinK_oh_EGh20ucvQ"
   * @example identifier "did:trust:cert.EiDJMati_kVGZUqNILyPJ-4V0ZcsZQRaMaOfYC1Fp14k9A"
   * @example accept "application/did+ld+json"
   * @example accept "application/ld+json;profile=\"https://w3c-ccg.github.io/did-resolution/\""
   */
    @Response("400","invalid input!")
    @Response("404","did not found")
    @Response("500","server error")
    @Get("{identifier}")
    public async getDids(
      @Path() identifier: string,
      @Header('Accept') accept?: string,
    ): Promise<any> {
      const pattern = new RegExp(valideTrustDid)
      if(!pattern.test(identifier)){
        this.setStatus(400)
        return
      }
      const now = new Date().getTime()
      const response = await new DidsService().get(identifier); 
      const after = new Date()
      if(response.status === 200){
        this.setStatus(200)
        switch(accept){
          case 'application/did+ld+json': {
            return response.data
          }
          case 'application/ld+json;profile=\"https://w3c-ccg.github.io/did-resolution/\"': {
            const resolverMetadata: ResolverMetadata = {
              identifier: identifier,
              driverId: driverId,
              duration: after.getTime() - now,
              retrieved: after.toUTCString(),
            }
            return <ResolutionResult>{
              didDocument: response.data,
              resolverMetadata: resolverMetadata
            }
          }
          default: {
            return response.data
          }
        }
      }else{
        this.setStatus(response.status)
        return
      }  
  }
}