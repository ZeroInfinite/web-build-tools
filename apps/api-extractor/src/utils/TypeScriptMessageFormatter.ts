// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.

import * as ts from 'typescript';

export class TypeScriptMessageFormatter {
  /**
   * Format a TypeScript diagnostic message or message chain.
   */
  public static format(messageText: string | ts.DiagnosticMessageChain): string {
    const formattedErrors: string[] = [];
    for (
      let wrappedMessageText: string | ts.DiagnosticMessageChain | undefined = messageText;
      wrappedMessageText !== undefined;
      wrappedMessageText = (wrappedMessageText as ts.DiagnosticMessageChain).next
    ) {
      if (typeof wrappedMessageText === 'string') {
        formattedErrors.push(wrappedMessageText);
      } else {
        formattedErrors.push(wrappedMessageText.messageText);
      }
    }

    return formattedErrors.join('; ');
  }
}
