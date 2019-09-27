import { Schema } from '@schematics/angular/component/schema';
import {
  chain,
  externalSchematic,
  Rule,
  schematic
} from '@angular-devkit/schematics';

export default function(schema: Schema): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'module', {
      name: schema.name,
      project: schema.project,
      routing: true
    }),
    schematic('table', { ...schema }),
    schematic('form', { ...schema })
  ]);
}
