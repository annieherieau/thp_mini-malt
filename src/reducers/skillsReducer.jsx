export default function skillsReducer(
  state = { skills: [], skillsCount: 0 },
  action
) {
  switch (action.type) {
    case "addSkills": {
      if (action.payload) {
        const newSkills = action.payload.split(",");
        return {
          ...state,
          skills: state.skills.concat(newSkills),
          skillsCount: state.skillsCount + newSkills.length,
        };
      } else {
        return state;
      }
    }
    case "removeSkills": {
      const leftSkills = state.skills.filter(
        (skill) => skill !== action.payload
      );
      return {skills: leftSkills, skillsCount: leftSkills.length}
    }

    case "removeAllSkills": {
      return { skills: [], skillsCount: 0 };
    }
    default: {
      return state;
    }
  }
}
