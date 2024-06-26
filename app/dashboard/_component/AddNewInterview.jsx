"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";

const AddNewInterview = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [job, setJob] = useState({
    position: "",
    description: "",
    experience: 0,
  });

  function handleFormChanges(e) {
    const { name, value } = e.target;
    setJob((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form submitted", job);
    setOpenDialog(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-10 my-2 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all"
        >
          <h2 className="text-lg text-center">+ Add New</h2>
        </div>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">
                Tell us more about the job you are interviewing for
              </DialogTitle>
              <DialogDescription>
                <div>
                  <p>
                    Add details about your job position/role, job description,
                    and years of experience.
                  </p>
                  <div className="mt-6 my-3">
                    <label>Job Role/Job Position</label>
                    <Input
                      value={job.position}
                      name="position"
                      onChange={handleFormChanges}
                      placeholder="Ex. Software Engineer 3"
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label>Job Description / Tech Stack</label>
                    <Textarea
                      value={job.description}
                      name="description"
                      onChange={handleFormChanges}
                      placeholder="Ex. ReactJs, NodeJs, Angular, Java, SQL, etc."
                      required
                    />
                  </div>
                  <div className="my-3">
                    <label>Years of Experience</label>
                    <Input
                      onChange={handleFormChanges}
                      max="100"
                      value={job.experience}
                      name="experience"
                      type="number"
                      placeholder="Ex. 5"
                    />
                  </div>
                </div>
                <div className="flex gap-5 justify-end">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={() => setOpenDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit">Start Interview</Button>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </form>
  );
};

export default AddNewInterview;
