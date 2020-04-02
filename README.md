# @areo/iconic

Brio's icon collection.

## Usage

To update the icon collection:

1. Add icons to `source` folder
2. Run `npm start`
3. Bump the pakcage version
4. Commit and push changes
5. Add a new release

To use the icon collection:

1. Install `@areo/iconic` by using a deploy token from Gitlab
2. Import the needed icon eg `import { Done } from '@areo/iconic`

Note:
1. `source` file names should not be duplicate
2. `source` file name should not start with numbers

## Development

The package consists of a few scripts:
- `npm run build`: uses `@svgr/cli` to create the `jsx` components to `components` folder

- `npm run index`: uses `create-ts-index` to create an index of the components, then it uses `barrelsby` to name the default exports

- `npm run compile`: uses `tsc` and `tsconfig` to compile the TypeScript files to `dist`

- `npm start`: runs the above commands sequentially



