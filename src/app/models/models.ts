export interface ICar{
    _id:String | null,
    "Name": String,
    "Miles_per_Gallon": Number | null,
    "Cylinders": Number,
    "Displacement": Number,
    "Horsepower": Number,
    "Weight_in_lbs": Number,
    "Acceleration": Number,
    "Year": String,
    "Origin": String
}
export interface IAccount  {
  accNumber: Number;
  type: {
    deposit: {
      amount: Number | null | undefined;
      date: String | null | undefined;
    };
    withdraw: {
      amount: Number | null| undefined;
      date: String | null| undefined;
    };
    loan: {
      amount: Number | null| undefined;
      interest: Number | null| undefined;
      payments: Number | null| undefined;
      date: String | null| undefined;
    };
  };
}