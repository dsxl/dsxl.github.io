---
title: Clicks-Not-Code Was a Budget, Not a Philosophy
description: >-
  The constraint on a business systems admin was never a shortage of ideas. It
  was the cost of the first working version — and that cost collapsed.
date: 2026-09-10
draft: true
---

For most of the last five years I've worked inside the Salesforce ecosystem, and
for most of that time there was a rule everyone repeated: *clicks, not code.*
Solve it declaratively. Reach for Apex last. Keep it maintainable for whoever
inherits it.

It gets taught as engineering discipline. It isn't. It's a budget.

The rule exists because writing custom code meant a developer, and a developer
meant a ticket, a sprint, a prioritization meeting, and a maintenance
conversation about who owns this in eighteen months. The declarative path wasn't
better. It was *available*. So you learned to shape problems until they fit the
tools you could reach without asking anyone for anything.

That shaping has a cost, and it doesn't show up anywhere you can point at. It
shows up as the approximation.

## The approximation

Here is the pattern, and if you've done this work you already know it.

Someone describes a process. You listen, and within about ten minutes you can
see the right answer — the data model that actually fits, the integration that
would make three manual handoffs disappear, the thing that should exist.

Then you estimate what it takes to build, weigh it against what you can
personally deliver this quarter, and ship the version that fits inside those
limits. A flow with more branches than it should have. A scheduled job that
mostly reconciles the gap. A field that means something slightly different than
its name suggests, for a reason that lives in your head.

None of that is wrong, exactly. It works. It just isn't the answer, and you know
it isn't, and eighteen months later someone asks why this process has four
manual steps in it and the honest answer is: because that's what one person
could build without a developer.

Multiply that by every process, over years. That's the real cost of the budget.
Not bad systems — *approximate* ones, each carrying a small unpaid debt that
someone eventually pays.

## What actually changed

Three tools, doing three different jobs. None of them individually is the story.
The combination is.

**GitHub was the one that changed how the work feels.** Not for the reason people
usually give — storage and backup are the least of it. The unlock is that
changes become reviewable, revertible, and attributable.

A flow you modified six months ago has no history worth the name. You get a
last-modified timestamp and a name. There's no diff, no reasoning, no record of
what it looked like before or why it changed. Every piece of configuration in a
business system is a decision, and virtually none of those decisions are written
down anywhere.

Once the work lives in a repository, the decisions have a paper trail. I can go
back and read why past-me did something, in past-me's words, next to the exact
change. That sounds like a small thing. It is the difference between a system you
maintain and a system you excavate.

**Make is the connective tissue, and its real value is legibility.** I want to be
precise here, because it's easy to oversell: there is nothing I build in Make
that couldn't be done in code. That's not the point.

The point is that someone else on the team can open a scenario and understand
what it does. When you're the only person in the room who reads code, every
integration you write in code is a thing only you can support. That's not
seniority, it's a bus factor of one, and it's a bad trade for a business
process that has to run whether or not you're on vacation.

So the line I've settled on: if the logic is genuinely complex, it goes in code.
If it's a sequence of steps between systems that a colleague might need to reason
about at 6pm on a Friday, it goes in a scenario. That's an availability decision,
not a technical one.

**Claude Code collapsed the cost of the first working version.** This is the one
that actually moved the constraint, and I want to be careful about how I describe
what it does — because the popular framing is wrong.

It's not most valuable when I don't know how to do something. It's most valuable
when I know *exactly* what I want and don't want to spend three hours on the
boilerplate between me and finding out if the idea works. The distance from "this
would solve it" to "here is a running version of it" went from days to an
afternoon.

When that distance is days, you don't explore. You commit to one approach because
you only get one attempt, and you pick the safe one. When it's an afternoon, you
build the thing, discover it's wrong in a way nobody could have predicted on a
whiteboard, and build the right one. Being wrong got cheap. That changes what you
attempt.

## The skill that mattered turned out to be reading

The bottleneck moved, and it moved somewhere I didn't expect.

It's no longer *can I write this*. It's *can I read this well enough to be
responsible for it*. If I can't review what comes out, I haven't built
something — I've adopted something, and I'll find out what it actually does at
the worst possible moment, in production, with someone waiting.

So the discipline is: I don't ship what I can't explain. Not "can't explain the
general shape of," but explain — what each piece does, why it's there, what
happens when the input is malformed. If I can't, either I read until I can, or it
doesn't go out. That rule has killed a few things I was excited about, and it's
the reason I trust the ones that shipped.

The related failure mode is quieter and worse: building more than you can
maintain. When building gets cheap, the temptation is to build everything you
were previously forced to say no to. But the constraint that lifted was
*creation* cost. Maintenance cost didn't move at all. Every system you add is a
thing that breaks at some point, and it breaks on you.

Saying no got harder and more important at exactly the same time.

## What none of this fixes

The tools know nothing about the business.

They don't know that this record type behaves differently because of a
five-year-old decision nobody documented. They don't know which team will quietly
ignore the process you designed, or which edge case is rare in the data and
constant in real life. They don't know what the actual problem is, because the
person describing it usually doesn't either — that's what the discovery
conversation is for, and no tool attends it for you.

That part is still the job. It was always the job. What changed is that far more
of my time now goes to it, because the implementation stopped eating the
calendar.

## The title was a lagging indicator

My team is being retitled — from Salesforce Administrators to Business Systems
Specialists and Architects.

It's tempting to read a title change as the cause of something. It isn't. It's
the org catching up to work that already changed. When the person who understands
the process end-to-end can also build the thing, "administrator" stops describing
the job. You're not maintaining someone else's system inside its limits anymore.
You're deciding what should exist.

That's an architecture role. It has been for a while. The title just took longer
to arrive than the work did.

---

*A note on what's absent here: I haven't described any of the actual systems.
They're proprietary, they sit behind a company login, and they aren't mine to
show. So this is about method rather than implementation — which is the part that
transfers anyway. Nobody else has my data model.*
