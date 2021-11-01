/* ./api/porfolio.ts */

export type AddPositionParams = {
    network: string;
    protocol: string;
    lockDate?: number;
    tokens: number;
    controllerContract: string;
    tokenContract: string;
};

export type DeletePositionParams = {
    positionId: string;
};


// A mock function to mimic making an async request for data
export function fetchContract(contractAddress: string) {
    return new Promise<{ data: string }>((resolve) =>
        setTimeout(() => resolve({ data: contractAddress }), 500)
    );
}

export function addPosition(params: AddPositionParams) {
    return new Promise<{ data: AddPositionParams }>((resolve) =>
        setTimeout(() => resolve({ data: params }), 500)
    );    
}

export function clearPositions() {
    return new Promise<{ data: any }>((resolve) =>
    setTimeout(() => resolve({ data: { status: 'complete', results: [] } }), 500)
);    
}

export function deletePosition(params: DeletePositionParams) {
    return new Promise<{ data: string }>((resolve) =>
        setTimeout(() => resolve({ data: params.positionId }), 500)
    );    
}
