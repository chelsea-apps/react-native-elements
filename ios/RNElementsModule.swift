//
//  RNElementsModule.swift
//  RNElementsModule
//
//  Copyright © 2021 Vlad Bibire. All rights reserved.
//

import Foundation

@objc(RNElementsModule)
class RNElementsModule: NSObject {
  @objc
  func constantsToExport() -> [AnyHashable : Any]! {
    return ["count": 1]
  }

  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
