import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const allQuestions = await prisma.mathQuestion.findMany( 
        { 
            where : {
                difficulty:1
            },
            select: {
                content:true,
                domain:true,
                options:true
            }
        });
    console.log(allQuestions);
}

main()
    .catch((e) => {console.log(e); process.exit(1);})
    .finally( async () => { await prisma.$disconnect(); });