import { StepSchema } from "../../lib/steps";

export function getCriteriaText(stepStack: StepSchema[], stepID: number, criteriaID: number) {
    // Check if steps and the specified step exist
    if (!stepStack || stepID >= stepStack.length) {
      return "Default text"; // Handle undefined steps or invalid stepID
    }
  
    const step = stepStack[stepID];
  
    // Check if context list and the specified element exist within the step
    if (!step || !step.criteria || criteriaID >= step.criteria.length) {
      return "Default text"; // Handle undefined context or invalid contextID
    }
  
    return step.criteria[criteriaID];
  }

export function getContextText(stepStack: StepSchema[], stepID: number, contextID: number) {
    // Check if steps and the specified step exist
    if (!stepStack || stepID >= stepStack.length) {
      return "Default text"; // Handle undefined steps or invalid stepID
    }
  
    const step = stepStack[stepID];
  
    // Check if context list and the specified element exist within the step
    if (!step || !step.context || contextID >= step.context.length) {
      return "Default text"; // Handle undefined context or invalid contextID
    }
  
    return step.context[contextID];
  }