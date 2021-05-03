import 'jest';
import * as complexOperations from './complexOperations';

describe('complexOperation - Unit Tests', () => {
  describe('checkEmail', () => {
    it('should return invalid when value is undefined', () => {
      const value = undefined;
      const expected = 'The email should be an string';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
    
    it('should return invalid when value is a void string', () => {
      const value = '';
      const expected = 'The email should be an string';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
    
    it('should return invalid when value is a number', () => {
      const value = 888;
      const expected = 'The email should be an string';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
    
    it('should return invalid when value is a "@"', () => {
      const value = '@';
      const expected = 'The email is invalid';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
    
    it('should return invalid when there is no characters between @ and .', () => {
      const value = 'test@.com';
      const expected = 'The email is invalid';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
    
    it('should return valid for a valid email', () => {
      const value = 'test@radiumrocket.com';
      const expected = 'The email is valid';
      const result = complexOperations.checkEmail(value);
      expect(result).toBe(expected);
    });
  });

  describe('calculateArea', () => {
    it('should return invalid when figure is undefined', () => {
      const value1 = undefined;
      const expected = value1+' is not supported';
      const result = complexOperations.calculateArea(value1);
      expect(result).toBe(expected);
    });

    it('should return invalid when the values 1 and 2 are undefined', () => {
      const value1 = 'square';
      const value2 = '';
      const value3 = '';
      const expected = 'number1 and number2 should be numbers';
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });

    it('should return invalid when one of the values is a word', () => {
      const value1 = 'square';
      const value2 = 'hola';
      const value3 = 3;
      const expected = 'number1 and number2 should be numbers';
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });
    it('should return invalid when one of the values is a word', () => {
      const value1 = 'square';
      const value2 = 3;
      const value3 = 'hola';
      const expected = 'number1 and number2 should be numbers';
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });
    it('should return the result for the valid calculate area', () => {
      const value1 = 'square';
      const value2 = 3;
      const value3 = 3;
      const expected = 9;
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });
    it('should return the result for the valid calculate area', () => {
      const value1 = 'rectangle';
      const value2 = 3;
      const value3 = 4;
      const expected = 12;
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });
    it('should return the result for the valid calculate area', () => {
      const value1 = 'triangle';
      const value2 = 5;
      const value3 = 4;
      const expected = 10;
      const result = complexOperations.calculateArea(value1, value2, value3);
      expect(result).toBe(expected);
    });
    it('should return 0 when one of the values is undefined', () => {
      const value1 = 'square';
      const value2 = 5;
      const expected = 0;
      const result = complexOperations.calculateArea(value1, value2);
      expect(result).toBe(expected);
    });
    it('should return the result for the valid calculate area', () => {
      const value1 = 'circle';
      const value2 = 4;
      const expected = 50.265;
      const result = complexOperations.calculateArea(value1, value2);
      expect(result).toBeCloseTo(expected, 3);
    });
  });

  describe('sumGratherThan', () => {
    it('should return that the params should be numbers when almost one of the values are an empty string', () => {
      const number1 = '';
      const number2 = '';
      const number3 = '';
      const expected = 'The params should be numbers';
      const result = complexOperations.sumGratherThan(number1, number2, number3);
      expect(result).toBe(expected);
    });
    it('should return that the params should be numbers when almost one of the values are an empty array', () => {
      const number1 = [];
      const number2 = '';
      const number3 = '';
      const expected = 'The params should be numbers';
      const result = complexOperations.sumGratherThan(number1, number2, number3);
      expect(result).toBe(expected);
    });
    it('should return the valid result', () => {
      const number1 = 1;
      const number2 = 5;
      const number3 = 10;
      const expected = '6 is less than 10';
      const result = complexOperations.sumGratherThan(number1, number2, number3);
      expect(result).toBe(expected);
    });
    it('should return the valid result', () => {
      const number1 = 1;
      const number2 = 5;
      const number3 = 5;
      const expected = '6 is grather than 5';
      const result = complexOperations.sumGratherThan(number1, number2, number3);
      expect(result).toBe(expected);
    });
  });

  describe('intersectionBetweenArrays', () => {
    it('should return invalid when almost one of the values is undefined', () => {
      const value1 = undefined;
      const expected = 'The params should be arrays';
      const result = complexOperations.intersectionBetweenArrays(value1);
      expect(result).toBe(expected);
    });
    it('should return invalid when almost one of the values is undefined', () => {
      const value1 = [1,2,3];
      const expected = 'The params should be arrays';
      const result = complexOperations.intersectionBetweenArrays(value1);
      expect(result).toBe(expected);
    });
    it('should return the valid result', () => {
      const value1 = [1,2,3];
      const value2 = [1];
      const expected = [1];
      const result = complexOperations.intersectionBetweenArrays(value1,value2);
      expect(result).toEqual(expected);
    });
    it('should return that it is no exist matching elements when in the elements of the variables there is not coincidents', () => {
      const value1 = [1,2,3];
      const value2 = [5];
      const expected = 'There are not matching elements';
      const result = complexOperations.intersectionBetweenArrays(value1,value2);
      expect(result).toBe(expected);
    });
    it('should return that it is no exist matching elements when in the elements of the variables there is not coincidents', () => {
      const value1 = ['test',2,3];
      const value2 = ['test', 5];
      const expected = ['test'];
      const result = complexOperations.intersectionBetweenArrays(value1,value2);
      expect(result).toEqual(expected);
    });
  });

  describe('sortArrayOfObjectsByKey', () => {
    it('should return an array of objects by name key', () => {
      const nameArray = [{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }];
      const key = 'name';
      const expected = [{name: 'David'}, {name: 'Guille'}, {name: 'Rodrigo'}];
      const result = complexOperations.sortArrayOfObjectsByKey(nameArray, key);
      expect(result).toEqual(expected);
    });
    it('should return invalid when the first param is undefined', () => {
      const nameArray = undefined;
      const key = 'name';
      const expected = 'The first param should be an array';
      const result = complexOperations.sortArrayOfObjectsByKey(nameArray, key);
      expect(result).toEqual(expected);
    }); 
    it('should return invalid when the second param is not a string', () => {
      const nameArray = [{ name: 'Guille' }, { name: 'Rodrigo' }, { name: 'David' }];
      const key = '';
      const expected = 'The second param should be an string';
      const result = complexOperations.sortArrayOfObjectsByKey(nameArray, key);
      expect(result).toEqual(expected);
    });
    it('should return invalid when one of the elements in the first param is not a name', () => {
      const nameArray = [{ name: 'Guille' }, { name: 'Rodrigo' }, { noName: 'NoName'}];
      const key = 'name';
      const expected = 'Some elements in the array does not have the '+key+' property';
      const result = complexOperations.sortArrayOfObjectsByKey(nameArray, key);
      expect(result).toEqual(expected);
    });
  });

  describe('numberOfOddAndEvenNumbers', () => {
    it('should return the valid result', () => {
      const numbersArray = [1, 4, 5, 8, 9];
      const expected = {odd: 3, even: 2};
      const result = complexOperations.numberOfOddAndEvenNumbers(numbersArray);
      expect(result).toEqual(expected); 
    });
    it('should return the valid result', () => {
      const numbersArray = [1.3, 4.2];
      const expected = {odd: 2, even: 0};
      const result = complexOperations.numberOfOddAndEvenNumbers(numbersArray);
      expect(result).toEqual(expected); 
    });
    it('first test for numberOfOddAndEvenNumbers', () => {
      const numbersArray = undefined;
      const expected = 'The param should be an array';
      const result = complexOperations.numberOfOddAndEvenNumbers(numbersArray);
      expect(result).toEqual(expected); 
    });
    it('first test for numberOfOddAndEvenNumbers', () => {
      const numbersArray = [1, 'string'];
      const expected = 'The array should have only numbers';
      const result = complexOperations.numberOfOddAndEvenNumbers(numbersArray);
      expect(result).toEqual(expected); 
    });
  });
});