/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAssets, IAtomicAssets } from "../@types";
import { isEmptyObject } from "../utils";
import { IFPS_URL } from "../utils/constants";

export class AssetFormatter {
  static formatAsset(assets: IAtomicAssets[], account: any) {
    const tempArray: IAssets[] = [];

    // formatando os dados do asset
    assets.forEach(item => {
      const stakeOwner = account === "" ? item.owner : account;

      const tempObj = {
        asset_id: +item.asset_id,
        owner: item.owner,
        template: +item.template.template_id,
        schema: item.schema.schema_name,
        collection: item.collection.collection_name,
        mutable_data: {
          ...this.formatKeyNumber(item.mutable_data),
          img: IFPS_URL + item.mutable_data.img,
        },
        immutable_data: this.formatKeyNumber(item.immutable_data),
        template_mint: +item.template_mint,
        data: {
          ...this.formatKeyNumber(item.data),
          img: IFPS_URL + item.data.img,
          stake_owner: stakeOwner,
        },
      };

      // validando se algum dado do tempObj é um objeto vazio
      const dataKey = Object.keys(tempObj);
      dataKey.forEach(key => {
        if (isEmptyObject(tempObj[key])) {
          delete tempObj[key];
        }
      });

      tempArray.push(tempObj);
    });

    return tempArray;
  }

  static formatKeyNumber(obj: any) {
    const dataKey = Object.keys(obj);
    const temp: any = obj;

    // transformando todos os dados que forem number
    dataKey.forEach(key => {
      if (parseFloat(obj[key])) {
        temp[key] = parseFloat(obj[key]);
      } else {
        temp[key] = obj[key];
      }
    });

    return temp;
  }

  static formatArrayKeyNumber(array: any[]) {
    const data: any[] = [];

    array.forEach((row: any) => {
      const dataKey = Object.keys(row);
      const temp: any = row;

      dataKey.forEach(key => {
        if (parseFloat(row[key])) {
          temp[key] = parseFloat(row[key]);
        } else {
          temp[key] = row[key];
        }
      });

      data.push(temp);
    });

    return data;
  }
}
