import * as vscode from 'vscode';
import { class_creator } from './class_creator';

export abstract class vscode_helper
{
    public static async create_name_input() : Promise <string | undefined>
    {
    var option: vscode.InputBoxOptions = {
        ignoreFocusOut: false,
        placeHolder: "foo it in the bar.",
        prompt: "Type your class name"
    };
    return vscode.window.showInputBox(option);
    }

    public static async create_path_input() : Promise<string | undefined>
    {
    var option: vscode.InputBoxOptions = {
        ignoreFocusOut: false,
        placeHolder: "Give me your path.",
        prompt: "Type a valid path"
    };
    return await vscode.window.showInputBox(option);
    }

    public static can_continue(res: any)
    {
        if (!res)
        {
            vscode.window.showErrorMessage("Your Class could not be created!");
            return false;
        }
        else if (res.length > 60)
        {
            vscode.window.showErrorMessage("Class name to long!");
            return false;
        }
        else if (res.indexOf(' ') >= 0)
        {
            vscode.window.showErrorMessage("Class name should not have spaces!");
            return false;
        }
        return true;
    }

    public static check_endings(class_creator: class_creator)
    {
        if (vscode.workspace.getConfiguration().get("cpp.creator.useCCEnding") as boolean === true)
        {
            class_creator.enable_cc_ending();
        }

        if (vscode.workspace.getConfiguration().get("cpp.creator.useHPPEnding") as boolean === true)
        {
            class_creator.enable_hpp_ending();
        }
    }
}