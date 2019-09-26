import { Schema } from '@schematics/angular/component/schema';
import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: Schema): Rule {
  return chain([
    externalSchematic('@angular/material', 'table', {
      project: schema.project,
      name: schema.name
    })
  ]);
}
