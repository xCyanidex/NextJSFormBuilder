const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // Create forms
  const form1 = await prisma.form.create({
    data: {
      userId: "user1",
      published: true,
      name: "Sample Form 1",
      description: "This is a sample form",
      content: '[{"question": "Sample question", "type": "text"}]',
    },
  });

  const form2 = await prisma.form.create({
    data: {
      userId: "user2",
      published: false,
      name: "Sample Form 2",
      description: "Another sample form",
      content: '[{"question": "Another question", "type": "number"}]',
    },
  });

  // Create form submissions
  await prisma.formSubmissions.create({
    data: {
      formId: form1.id,
      content:
        '{"answers": [{"question": "Sample question", "answer": "Sample answer"}]}',
    },
  });

  await prisma.formSubmissions.create({
    data: {
      formId: form2.id,
      content: '{"answers": [{"question": "Another question", "answer": 42}]}',
    },
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
