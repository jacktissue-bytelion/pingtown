export const handleBack = (formStep, setFormStep) => {
  setFormStep(formStep - 1);
};

export const handleNext = (formStep, setFormStep) => {
  setFormStep(formStep + 1);
};

export const updateForm = (event, setFormData) => {
  const key = event.target.getAttribute('name');
  const { value } = event.target;

  setFormData((previousState) => ({
    ...previousState,
    [key]: value,
  }));
};

export const batchUpdateForm = (updates, setFormData) => {
  setFormData((previousState) => ({
    ...previousState,
    ...updates,
  }));
};
