let prismaInstance: any = null

export const getPrismaClient = () => {
  if (prismaInstance) return prismaInstance
  
  if (!process.env.DATABASE_URL) {
    console.warn('DATABASE_URL not set - Prisma will fail at runtime')
  }
  
  const { PrismaClient } = require('@prisma/client')
  prismaInstance = new PrismaClient()
  return prismaInstance
}

export const prisma = new Proxy({} as any, {
  get(_target, prop) {
    const client = getPrismaClient()
    return client[prop as string]
  }
})