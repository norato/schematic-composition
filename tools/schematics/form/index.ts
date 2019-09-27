import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@angular/material', 'addressForm', {
      name: [schema.name, 'form'].join('-'),
      project: schema.project
    })
  ]);
}
