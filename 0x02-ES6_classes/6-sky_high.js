import Building from './5-building.js';

class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // Call the constructor of the parent class
    this._floors = this.validateNumber(floors, 'Floors');
  }

  get floors() {
    return this._floors;
  }

  validateNumber(value, attribute) {
    const parsedValue = parseFloat(value);
    if (isNaN(parsedValue) || typeof parsedValue !== 'number') {
      throw new TypeError(`${attribute} must be a number`);
    }
    return parsedValue;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

export default SkyHighBuilding;
