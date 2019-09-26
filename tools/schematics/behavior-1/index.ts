import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function(schema: any): Rule {
  return chain([
    externalSchematic('@schematics/angular', 'component', {
      ...schema,
      name: [schema.name, 'behavior-1'].join('-')
    })
  ]);
}
