# Design Patterns in TypeScript

This repository contains implementations of various design patterns in TypeScript. The project is organized by pattern categories: Creational, Structural, Behavioral, and SOLID principles.

## Table of Contents

- [Creational Patterns](#creational-patterns)
  - [Singleton](#singleton)
  - [Factory](#factory)
  - [Object Pool](#object-pool)
  - [Decorators](#decorators)
  - [Dependency Injection](#dependency-injection)
  - [Loose Coupling](#loose-coupling)
- [Structural Patterns](#structural-patterns)
  - [Adapter](#adapter)
  - [Decorator](#decorator)
  - [Facade](#facade)
  - [Composite](#composite)
- [Behavioral Patterns](#behavioral-patterns)
  - [Strategy](#strategy)
  - [Command](#command)
  - [Observer](#observer)
  - [Template](#template)
  - [State](#state)
- [SOLID Principles](#solid-principles)
  - [Single Responsibility Principle](#single-responsibility-principle)
  - [Open/Closed Principle](#openclosed-principle)
  - [Liskov Substitution Principle](#liskov-substitution-principle)
  - [Interface Segregation Principle](#interface-segregation-principle)
  - [Dependency Inversion Principle](#dependency-inversion-principle)

## Creational Patterns

### Singleton

The Singleton pattern ensures a class has only one instance and provides a global point of access to it. This is useful when exactly one object is needed to coordinate actions across the system.

### Factory

The Factory pattern provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created. It's used when a class cannot anticipate the class of objects it must create.

### Object Pool

The Object Pool pattern recycles objects that are expensive to create. It maintains a pool of objects ready for use, rather than allocating and destroying them on demand.

### Decorators

TypeScript decorators provide a way to add annotations and modify classes and class members. They can be used to modify the behavior of methods, properties, and classes without changing their implementation.

### Dependency Injection

Dependency Injection is a technique where an object receives other objects that it depends on. These are called dependencies. Instead of creating them inside the class, they are passed in from outside.

### Loose Coupling

Loose coupling is a design goal that seeks to reduce the interdependencies between components of a system. This makes the system more maintainable and flexible.

## Structural Patterns

### Adapter

The Adapter pattern allows objects with incompatible interfaces to collaborate. It acts as a wrapper between two objects, converting the interface of one object to make it compatible with another.

### Decorator

The Decorator pattern lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors. It provides a flexible alternative to subclassing for extending functionality.

### Facade

The Facade pattern provides a simplified interface to a complex subsystem. It doesn't hide the subsystem but provides a simplified interface to make it easier to use.

### Composite

The Composite pattern lets you compose objects into tree structures to represent part-whole hierarchies. It lets clients treat individual objects and compositions of objects uniformly.

## Behavioral Patterns

### Strategy

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. It lets the algorithm vary independently from clients that use it.

### Command

The Command pattern turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as method arguments, delay or queue a request's execution, and support undoable operations.

### Observer

The Observer pattern lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing. It's a one-to-many dependency between objects.

### Template

The Template Method pattern defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

### State

The State pattern lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

## SOLID Principles

### Single Responsibility Principle

A class should have only one reason to change, meaning it should have only one job or responsibility.

### Open/Closed Principle

Software entities should be open for extension but closed for modification. This means you should be able to add new functionality without changing existing code.

### Liskov Substitution Principle

Objects of a superclass should be replaceable with objects of a subclass without affecting the correctness of the program.

### Interface Segregation Principle

No client should be forced to depend on methods it does not use. Many client-specific interfaces are better than one general-purpose interface.

### Dependency Inversion Principle

High-level modules should not depend on low-level modules. Both should depend on abstractions. Abstractions should not depend on details. Details should depend on abstractions.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- TypeScript (v4.5 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/ArditZubaku/design-patterns-ts.git
cd design-patterns-ts
```

2. Install dependencies
```bash
pnpm install
```

3. Run examples
```bash
pnpm start
```