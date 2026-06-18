import { promises as fs } from "fs";
import path from "path";
import type { Project } from "@/lib/types";

const projectFile = path.join(process.cwd(), "data", "projects.json");

export async function getProjects() {
  const raw = await fs.readFile(projectFile, "utf8");
  const projects = JSON.parse(raw) as Project[];
  return projects.sort((a, b) => a.order - b.order);
}
