// INITIAL STATE
const initialSkillsState = { skills: [], skillsCount: 0 };

// REDUCER
const skillsReducer = (state = initialSkillsState, action) => {
  switch (action.type) {
    case "skills/addSkills": {
      if (action.payload) {
        const newSkills = action.payload.trim().split(",");
        return {
          ...state,
          skills: newSkills,
          skillsCount: newSkills.length,
        };
      } else {
        return state;
      }
    }
    case "skills/removeSkill": {
      const leftSkills = state.skills.filter(
        (skill) => skill !== action.payload
      );
      return { skills: leftSkills, skillsCount: leftSkills.length };
    }

    case "skills/removeAllSkills": {
      return { skills: [], skillsCount: 0 };
    }
    default: {
      return state;
    }
  }
};

export default skillsReducer;
