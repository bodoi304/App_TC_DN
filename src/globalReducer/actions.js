import { IS_LOADING} from "./constants";


export function updateIsLoading(isLoading){
    return {
        type: IS_LOADING,
        payload: isLoading,
    }
}

