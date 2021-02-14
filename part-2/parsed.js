{
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Me' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'after' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'String' } },
          defaultValue: undefined,
          directives: [],
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'includeUsername' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'Boolean' },
            },
          },
          defaultValue: { kind: 'BooleanValue', value: false },
          directives: [
            {
              kind: 'Directive',
              name: { kind: 'Name', value: 'test' },
              arguments: [],
            },
          ],
        },
      ],
      directives: [
        {
          kind: 'Directive',
          name: { kind: 'Name', value: 'test' },
          arguments: [],
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: undefined,
            name: { kind: 'Name', value: 'me' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  alias: undefined,
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [
                    {
                      kind: 'Directive',
                      name: { kind: 'Name', value: 'include' },
                      arguments: [
                        {
                          kind: 'Argument',
                          name: { kind: 'Name', value: 'if' },
                          value: {
                            kind: 'Variable',
                            name: { kind: 'Name', value: 'includeUsername' },
                          },
                        },
                      ],
                    },
                  ],
                  selectionSet: undefined,
                },
                {
                  kind: 'Field',
                  alias: { kind: 'Name', value: 'username' },
                  name: { kind: 'Name', value: 'myusername' },
                  arguments: [],
                  directives: [],
                  selectionSet: undefined,
                },
                {
                  kind: 'Field',
                  alias: undefined,
                  name: { kind: 'Name', value: 'addressses' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '5' },
                    },
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'after' },
                      value: {
                        kind: 'Variable',
                        name: { kind: 'Name', value: 'after' },
                      },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        alias: undefined,
                        name: { kind: 'Name', value: 'city' },
                        arguments: [],
                        directives: [],
                        selectionSet: undefined,
                      },
                      {
                        kind: 'Field',
                        alias: undefined,
                        name: { kind: 'Name', value: 'province' },
                        arguments: [],
                        directives: [],
                        selectionSet: undefined,
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
}