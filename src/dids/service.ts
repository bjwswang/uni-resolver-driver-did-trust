import axios from 'axios'

const trustDidResolver = process.env.RESOLVER || 'http://did.360.cn/resolve/v1'

export class DidsService {
  public async get(identifier: string): Promise<any> {
    return await axios.get(trustDidResolver + '/' + identifier)
  }
}