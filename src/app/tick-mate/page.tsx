"use client"
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Edit2, Check } from "lucide-react";

type Task = {
  text: string;
  isEditing: boolean;
  tempText: string;
};

export default function TodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { text: input.trim(), isEditing: false, tempText: input.trim() }]);
      setInput("");
    }
  };

  const removeTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const editTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, isEditing: true, tempText: task.text } : task
      )
    );
  };

  const updateTask = (index: number) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, text: task.tempText, isEditing: false } : task
      )
    );
  };

  const handleEditChange = (index: number, newText: string) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, tempText: newText } : task
      )
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md space-y-4">
        <motion.h1 
          className="text-2xl font-bold text-center" 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tickmate
        </motion.h1>
        <div className="flex gap-2">
          <Input 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
          />
          <Button onClick={addTask}>Add</Button>
        </div>
        <div className="space-y-2">
          {tasks.map((task, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
            >
              <Card className="flex items-center justify-between p-4">
                {task.isEditing ? (
                  <Input 
                    value={task.tempText} 
                    onChange={(e) => handleEditChange(index, e.target.value)}
                    autoFocus
                  />
                ) : (
                  <CardContent className="p-0">{task.text}</CardContent>
                )}
                <div className="flex gap-2 ms-4">
                  {task.isEditing ? (
                    <Button variant="ghost" onClick={() => updateTask(index)}>
                      <Check size={18} />
                    </Button>
                  ) : (
                    <Button variant="ghost" onClick={() => editTask(index)}>
                      <Edit2 size={18} />
                    </Button>
                  )}
                  <Button variant="ghost" onClick={() => removeTask(index)}>
                    <Trash2 size={18} />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
