import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    console.log("Start seeding...");
    
    await prisma.mathQuestion.deleteMany();
    await prisma.mathQuestion.create({
        data: {
            content: "If $$2x+6=10$$, what is $$x$$?",
            difficulty: 1,
            domain: "Algebra",
            options: JSON.stringify(["1","2","3","4"]),
            correctAnswer: "2"
        }
    });

    console.log("Finish seeding");
}

main()
    .catch((e)=>{
        console.log(e);
        process.exit(1);
    })
    .finally(async() => {
        await prisma.$disconnect();
    })