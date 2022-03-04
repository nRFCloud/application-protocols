import { readdirSync, readFileSync } from 'fs';
import { sync as globSync } from 'glob';
import path from 'path';

export interface SchemaTestCollection {
    schemaCollectionName: SchemaCollectionName;
    schemasRecords: SchemaRecord[];
}

export interface Schema {
    appId: string;
    messageType: string;
    data: any;
}

export interface SchemaRecord {
    schemaName: string;
    schema: Schema;
    schemaTests: Schema[];
}

export enum SchemaCollectionName {
    CloudToDevice = 'cloudToDevice',
    DeviceToCloud = 'deviceToCloud',
    DeviceShadow = 'deviceShadow',
}

export const getSchemaTestCollection = (
    schemaCollectionName: SchemaCollectionName,
): SchemaTestCollection => {
    const schemaTestCollection: SchemaTestCollection = {
        schemaCollectionName,
        schemasRecords: [],
    };

    try {
        const schemaFolders = readdirSync(
            path.resolve(__dirname, 'schemas', schemaCollectionName),
        );

        for (const schemaName of schemaFolders) {
            const schemaPath = globSync(
                path.join(
                    path.resolve(
                        __dirname,
                        'schemas',
                        schemaCollectionName,
                        schemaName,
                    ),
                    '!(*example*).json',
                ),
            )[0];
            const schema = JSON.parse(readFileSync(schemaPath, 'utf-8'));

            const schemaExamplePaths = globSync(
                path.join(
                    path.resolve(
                        __dirname,
                        'schemas',
                        schemaCollectionName,
                        schemaName,
                    ),
                    '*example*',
                ),
            );
            const schemaTests = schemaExamplePaths.map((exampleSchema) => {
                return JSON.parse(readFileSync(exampleSchema, 'utf-8'));
            });

            schemaTestCollection.schemasRecords.push({
                schemaName,
                schema,
                schemaTests,
            });
        }
    } catch (e) {
        console.error('Error getting collection', e);
    }

    return schemaTestCollection;
};
