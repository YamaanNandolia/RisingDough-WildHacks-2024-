export function parseJson(json: string) {
    const data = JSON.parse(json);
  
    return data.map((item: any) => ({
      Company: item.Company.value,
      Amount: item.Amount.value,
      Deadline: item.Deadline.value,
      Categories: item.Categories.value,
    }));
  }