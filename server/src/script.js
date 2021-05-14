const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {

  const newLink = await prisma.link.create({
    data: {
      description: 'Fullstack Tutorial for GraphQL',
      url: 'wwww.howtographql.com'
    },
  })
  const allLinks = await prisma.link.findMany()
  // console.log(allLinks)
}

main()
  .catch( e => {
    throw e
  })
  .finally(async () => {
    // Close the database connections when the script terminates
    await prisma.$disconnect()
  })
