'use client';

import { useState } from 'react';

export default function Page() {

    let Perms = 0b0000n;

    function handleChange(e) {
        if (e.target.checked) {
            Perms += BigInt(e.target.value);
        } else {
            Perms -= BigInt(e.target.value);
        }

        console.log("Current Value: " + Perms);
        console.log("Current State: " + e.target.checked);
        console.log(Perms.toString(2));
    }

    return (
        <form>
            <input value="1" type="checkbox" name="perm_viewWarehouse" onChange={handleChange}/>
            <span> View Warehouse </span>

            <input value="2" type="checkbox" name="perm_viewStock" onChange={handleChange}/>
            <span> View Stock </span>

            <input value="4" type="checkbox" name="perm_createItem" onChange={handleChange}/>
            <span> Create Item </span>

            <input value="8" type="checkbox" name="perm_deleteItem" onChange={handleChange}/>
            <span> Delete Item </span>
        </form>
    );

}