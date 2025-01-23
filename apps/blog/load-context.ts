import type { ExecutionContext } from '@cloudflare/workers-types';
import type { AppLoadContext } from 'react-router';
import { PrismaClient } from '@prisma/client';
import { PrismaD1 } from '@prisma/adapter-d1';

declare global {
  interface CloudflareEnvironment extends Env {}
}

declare module 'react-router' {
  export interface AppLoadContext {
    cloudflare: {
      env: CloudflareEnvironment;
      ctx: Omit<ExecutionContext, 'props'>;
    };
    prisma: PrismaClient;
  }
}

type GetLoadContextArgs = {
  request: Request;
  context: Pick<AppLoadContext, 'cloudflare'>;
};

export function getLoadContext({ context }: GetLoadContextArgs) {
  const adapter = new PrismaD1(context.cloudflare.env.DB);
  const prisma = new PrismaClient({ adapter });
  return {
    cloudflare: context.cloudflare,
    prisma,
  };
}
