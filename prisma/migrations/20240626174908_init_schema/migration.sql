-- CreateTable
CREATE TABLE "MockInterview" (
    "id" SERIAL NOT NULL,
    "jobMockRes" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "jobDescription" TEXT NOT NULL,
    "jobExperience" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "mockId" TEXT NOT NULL,

    CONSTRAINT "MockInterview_pkey" PRIMARY KEY ("id")
);
