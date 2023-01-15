import { NextRequest, NextResponse } from 'next/server';
import MDBConnect from "../lib/mongodb";
export async function middleware(req) {
  
    await new MDBConnect()

  }

  export const config = {
    matcher: '*'
};

// async function  ConnectToDatabase (){

// }


// export default ConnectToDatabase