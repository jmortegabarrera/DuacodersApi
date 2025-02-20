import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { isValidDni } from 'nif-dni-nie-cif-validation';

export function IsValidDNI(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidDNI',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any) {
          return isValidDni(value);
        },
        defaultMessage() {
          return 'El NIF no es válido. Debe ser un DNI español.';
        }
      }
    });
  };
}
