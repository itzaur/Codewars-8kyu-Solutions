/*
DESCRIPTION:
Given the molecular mass of two molecules and, their masses present in a vessel of volume 

V at a specific temperature 

T, find the total pressure exerted by the molecules. Formula to calculate the pressure is:
*/
function solution(
  molarMass1,
  molarMass2,
  givenMass1,
  givenMass2,
  volume,
  temp
) {
  const gasConstant = 0.082;
  const kelvinTemp = temp + 273.15;
  return (
    ((givenMass1 / molarMass1 + givenMass2 / molarMass2) *
      kelvinTemp *
      gasConstant) /
    volume
  );
}

console.log(solution(44, 30, 3, 2, 5, 50)); //0.7146511212121212
console.log(solution(60, 20, 10, 30, 10, 100)); //5.099716666666667
