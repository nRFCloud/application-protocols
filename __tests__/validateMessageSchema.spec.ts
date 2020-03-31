import AppRepo from '../index';

const validGPSLTEMessage = {
    appId: 'GPS',
    messageType: 'DATA',
    data:
        '$GPGGA,141856.00,6326.27336,N,01028.08721,E,1,09,0.81,34.7,M,39.8,M,,*64',
};

const invalidGPSLTEMessageAppId = {
    appId: 'MAGNETIC', // appId is not supported
    messageType: 'DATA',
    data: '{x: 0.5, y: 0.2, z: 0.3}',
};

const invalidGPSLTEMessageType = {
    appId: 'GPS',
    messageType: 'COORDINATES', // message type is not supported
    data:
        '$GPGGA,141856.00,6326.27336,N,01028.08721,E,1,09,0.81,34.7,M,39.8,M,,*64',
};

const invalidGPSLTEMessageData = {
    appId: 'GPS',
    messageType: 'DATA',
    data: '$GPWPL,5128.62,N,00027.58,W,EGLL*59', // GPWPL - waypoint location format, this is not supported
};

describe('schema validation', () => {
    beforeEach(() => {
        console.error = jest.fn();
    });

    afterEach(() => {
        (console.error as jest.Mock).mockRestore();
    });

    test('should return true for a valid schema', () => {
        expect(AppRepo.isValidMessage(validGPSLTEMessage)).toBe(true);
    });
    test('should return false for a schema with invalid appId', () => {
        expect(AppRepo.isValidMessage(invalidGPSLTEMessageAppId)).toBe(false);
        expect((console.error as jest.Mock).mock.calls[0][0]).toBe(
            'validation error',
        );
    });
    test('should return false for a schema with invalid message type', () => {
        expect(AppRepo.isValidMessage(invalidGPSLTEMessageType)).toBe(false);
        expect((console.error as jest.Mock).mock.calls[0][0]).toBe(
            'validation error',
        );
    });
    test('should return false for an invalid schema data', () => {
        expect(AppRepo.isValidMessage(invalidGPSLTEMessageData)).toBe(false);
        expect((console.error as jest.Mock).mock.calls[0][0]).toBe(
            'validation error',
        );
    });
});
