// SKILLS ACTIONS
export function addSkills(skills) {
  return { type: "skills/addSkills", payload: skills };
}

export function removeSkills(skills) {
  return { type: "skills/removeSkills", payload: skills };
}

export function removeAllSkills() {
  return { type: "skills/removeAllSkills"};
}
