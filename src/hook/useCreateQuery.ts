/**
 *
 * @param data
 * @USE
 * ex )
 * const request = createUrlParam(data)
 * "api/${request}"
 */
const createUrlParam = (data: any) => {
    let form = ['?']
    for (let i in data) {
        if (data[i] !== undefined && data[i] !== null && data[i] !== '') form.push(`${i}=${data[i]}&`)
    }
    const result = form.toString().replace(',', '').replaceAll(',', '').replaceAll('$', ',').slice(0, -1)
    return result
}

export default createUrlParam
